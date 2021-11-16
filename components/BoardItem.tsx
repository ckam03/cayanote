import Link from 'next/link'
import Board from './Board'

interface IBoardItem {
    id: number;
}

const BoardItem: React.FC <IBoardItem> = ({ id }) => {
    return (
        <div className="flex">
        <div className="h-60 w-60 border-2 border-black text-black flex items-center cursor-pointer">
            {id}
            <Link href={'/Dashboard/' + id} key={id}>
                    {/* <Board boardId={id} />  */}
                </Link>
            
        </div>
        </div>
    )
}
export default BoardItem;