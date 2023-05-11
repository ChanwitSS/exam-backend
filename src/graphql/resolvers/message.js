import set from 'lodash/set';
import get from 'lodash/get';
import uuid from 'uuid/v1';
// import pubsub from '../pubsub';
import mock from '../../mock';
import { MessageModel } from '../../mongoose/schema/message';
import { RoomModel } from '../../mongoose/schema/room';

export default {
  Query: {
    messages: async (parent, { roomName }) => {
      // const msgs = get(mock, `rooms.${roomName}.messages`, []);
      const msgs = await MessageModel.find({ roomName });
      return msgs;
    },
  },
  Mutation: {
    sendMessage: async (parent, { roomName, message, senderName }) => {
      const newMessage = {
        id: uuid(),
        body: message,
        from: { name: senderName },
        createAt: new Date(),
        roomName,
      };
      // set(mock, `rooms.${roomName}`, {
      //   messages: [...get(mock, `rooms.${roomName}.messages`, []), newMessage],
      // });

      await MessageModel.create(newMessage);
      // pubsub.publish('NEW_MESSAGE', roomName, message);
      return {
        successful: true,
      };
    },
  },
  // Subscription: {
  //   newMessage: (parent, { roomName }) => {
  //     pubsub.publish('NEW_MESSAGE', {
  //       message: {
  //         author: 'Ali Baba',
  //         comment: 'Open sesame',
  //       },
  //     });
  //   },
  // },
  // Subscription: {
  //   newMessage: {
  //     subscribe: (parent, { roomName }) =>
  //       // pubsub.asyncIterator('NEW_MESSAGE', roomName),
  //       pubsub.asyncIterator(['NEW_MESSAGE']),
  //     resolve: (payload) => payload,
  //   },
  // },
};
