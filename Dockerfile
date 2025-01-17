###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

# Install app dependencies
RUN yarn install

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node yarn.lock ./

# In order to run `npm run build` we need access to the Nest CLI which is a dev dependency. In the previous development stage we ran `npm ci` which installed all dependencies, so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Run the build command which creates the production bundle
RUN yarn build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Running `npm ci` removes the existing node_modules directory and passing in --only=production ensures that only the production dependencies are installed. This ensures that the node_modules directory is as optimized as possible
RUN yarn --only=production && yarn cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

ARG WEBHOOK_API_KEY
ENV WEBHOOK_API_KEY=${WEBHOOK_API_KEY}

ARG REDIS_HOST
ENV REDIS_HOST=${REDIS_HOST}

ARG REDIS_PORT
ENV REDIS_PORT=${REDIS_PORT}

ARG REDIS_USER
ENV REDIS_USER=${REDIS_USER}

ARG REDIS_PASSWORD
ENV REDIS_PASSWORD=${REDIS_PASSWORD}

ARG ROUND_INTERVAL_SECONDS
ENV ROUND_INTERVAL_SECONDS=${ROUND_INTERVAL_SECONDS}

ARG ABLY_API_KEY
ENV ABLY_API_KEY=${ABLY_API_KEY}

ARG BACKEND_URL
ENV BACKEND_URL=${BACKEND_URL}

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/src/main" ]
