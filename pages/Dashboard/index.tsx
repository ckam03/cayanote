import { NewComponentProvider } from "../../Context/NewComponentContext";
import Board from "../../components/Board";
import { useState } from "react";
import BoardItem from "../../components/BoardItem";
import AddBoard from "../../components/AddBoard";
import Link from "next/link";

const Dashboard = () => {
  const boardList: any[] = [];
  const [boards, setBoards] = useState(boardList);

  const createBoard = () => {
    const newBoard = {
      id: Math.floor(Math.random() * 10000),
    };
    setBoards([...boards, newBoard]);
  };
  return (
    <div className="flex items-center space-x-2">
      <NewComponentProvider>
        {boards.map((board, index) => {
          return (
            <Link href={"/Dashboard/" + board.id} key={board.id}>
              <div
                className="h-60 w-60 border-2 border-black text-black flex items-center cursor-pointer"
                key={board.id}
              >
                {board.id} 
              </div>
            </Link>
          );
        })}
        {/* <Board /> */}
        <AddBoard createBoard={createBoard} />
      </NewComponentProvider>
    </div>
  );
};
export default Dashboard;
