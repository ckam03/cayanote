using CayanoteAPI.Data;
using CayanoteAPI.Dtos;
using CayanoteAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CayanoteAPI.Controllers
{
    [ApiController]
    [Route("Board")]
    public class BoardController : ControllerBase
    {
        private readonly CayanoteDBContext _dbContext;
        public BoardController(CayanoteDBContext dbContext)
        {
            _dbContext = dbContext; 
        }

        [HttpGet]
        public async Task GetBoards()
        {
            await _dbContext.Boards.ToListAsync();

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
