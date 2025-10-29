import type { IProjectExt } from "../../../models/IProjectExt";
import { DropdownImage } from "./DropdownImage";

interface IRoomImagesProps {
  data: IProjectExt;
}

export const RoomImages = ({ data }: IRoomImagesProps) => {
  return (
    <>
      {data.interior && data.interior.length > 0 ? (
        data.interior.map((room) => (
          <div
            className="dropdown-room-container"
            key={`${room.name}-${data.id}`}
          >
            <DropdownImage room={room} />
          </div>
        ))
      ) : (
        <>No Data provided</>
      )}
    </>
  );
};
