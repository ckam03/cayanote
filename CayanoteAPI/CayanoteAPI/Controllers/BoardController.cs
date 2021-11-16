using CayanoteAPI.Data;
using CayanoteAPI.Dtos;
using CayanoteAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CayanoteAPI.Controllers
{
    [ApiController]
    [Route("Board")]
    public class BoardController : ControllerBase
    {
        private readonly CayanoteDBContext _dbContext;
        public BoardController(CayanoteDBContext db)
        {
            _dbContext = db; 
        }

        [HttpGet]
        public async Task<IActionResult> GetBoards()
        {
            var boards = await GetBoards();
            return boards;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBoard(int boardId)
        {
            var board = await GetBoard(boardId);
            return board;
        }

        /*[HttpPost]
        public async Task<IEnumerable<Board>> CreateBoardAsync(CreateBoardDto boardDto)
        {
            Board board = new()
            {
                Id = boardDto.Id,
                Name = boardDto.Name,
                NumberofComponents = boardDto.NumberofComponents,
                Components = boardDto.Components
            };
                
                
        }*/

    }
}
