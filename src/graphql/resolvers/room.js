import { RoomModel } from '../../mongoose/schema/room';

export default {
  Mutation: {
    createRoom: async (parent, { roomName }) => {
      const room = await RoomModel.findOne({ roomName });
      if (room) {
        return {
          successful: false,
        };
      } else {
        await RoomModel.create({ roomName });
        return {
          successful: true,
        };
      }
    },
  },
};
