const RedisConfig = () => ({
  nodes: [process.env.REDIS_CLUSTER_NODE],
});

export default RedisConfig;
