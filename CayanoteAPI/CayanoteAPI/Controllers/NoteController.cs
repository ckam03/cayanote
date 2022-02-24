using CayanoteAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace CayanoteAPI.Controllers
{
    [ApiController]
    [Route("Note")]
    public class NoteController : ControllerBase
    {
        private readonly CayanoteDBContext _dbContext;
        public NoteController(CayanoteDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetNote()
        {
            return await GetNote();
        }
    }
}
