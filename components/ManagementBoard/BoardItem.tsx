type BoardData = {
  activeBoard: number;
  id: number;
  handleBoardToggle: (id: number) => void;
  title: string;
  items: string[];
  headItems?: string[];
};

const BoardItem = ({ boardData }: { boardData: BoardData }) => {
  const { activeBoard, id, handleBoardToggle, title, items, headItems } =
    boardData;

  return (
    <>
      <div className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark">
        <button
          onClick={() => {
            handleBoardToggle(id);
          }}
          className="flex cursor-pointer items-center justify-between px-6 py-5 text-metatitle3 font-medium text-black dark:text-white lg:px-9 lg:py-7.5"
        >
          {title}

          {activeBoard === id ? (
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        {headItems?.map((item, index) => (
          <p
            key={index}
            className={`border-t border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-7.5 ${
              activeBoard === id ? "block" : "hidden"
            }`}
          >
            {item}
          </p>
        ))}
        {headItems?.length && (
          <p className={` m-6  ${activeBoard === id ? "block" : "hidden"}`}>
            Членове:
          </p>
        )}
        {items.map((item, index) => (
          <p
            key={index}
            className={`border-t border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-7.5 ${
              activeBoard === id ? "block" : "hidden"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default BoardItem;
