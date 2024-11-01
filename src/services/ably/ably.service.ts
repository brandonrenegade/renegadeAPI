import { Injectable } from '@nestjs/common';

import * as Ably from 'ably';

@Injectable()
export class AblyService {
  private client: Ably.Realtime;

  constructor() {
    this.initializeAbly();
  }

  private initializeAbly() {
    this.client = new Ably.Realtime({
      key: process.env.ABLY_API_KEY,
      transportParams: { heartbeatInterval: 10000 },
      logLevel: 4,
    });
    this.client.connection.on('initialized', () => {
      console.log(new Date(), 'Ably: initialized');
    });
    this.client.connection.on('connecting', () => {
      console.log(new Date(), 'Ably: connecting');
    });
    this.client.connection.on('connected', () => {
      console.log(new Date(), 'Ably: connected');
    });
    this.client.connection.on('suspended', () => {
      console.log(new Date(), 'Ably: suspended');
    });
    this.client.connection.on('closing', () => {
      console.log(new Date(), 'Ably: closing');
    });
    this.client.connection.on('closed', () => {
      console.log(new Date(), 'Ably: closed');
    });
    this.client.connection.on('failed', () => {
      console.log(new Date(), 'Ably: failed');
    });
    this.client.connection.on('disconnected', () => {
      console.log(new Date(), 'Ably: disconnected');
    });
  }

  async sendMessage(channelName: string, message: any) {
    try {
      // this.initializeAbly();
      const channel = this.client.channels.get(channelName);
      channel.publish('event_draft', message);
    } catch (err) {
      console.log(err);
    }
  }
}
