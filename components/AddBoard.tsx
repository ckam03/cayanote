interface IAddBoard {
    createBoard: any;
}

const AddBoard: React.FC <IAddBoard> = ({createBoard}) => {
    return (
        <div>
            <button onClick={() => createBoard()} className="bg-sky-500 text-sky-50 rounded px-4 py-8 w-32 h-20 flex items-center justify-center">Add Board</button>
        </div>
    )
}
export default AddBoard