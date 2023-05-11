import { RoomModel } from '../../mongoose/schema/room';

export default {
  Mutation: {
    createRoom: async (parent, { roomName }) => {
    //   await RoomModel.findOneAndUpdate(
    //     { roomName },
    //     { roomName, messages: [] },
    //     { upsert: true }
    //   );
      console.log('roomName')
      return {
        successful: true,
      };
    },
  },
};
