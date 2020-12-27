using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Feedback;
using Feedback.Data;

namespace Feedback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignsController : ControllerBase
    {
        private readonly FeedbackContext _context;

        public AssignsController(FeedbackContext context)
        {
            _context = context;
        }

        // GET: api/Assigns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Assign>>> GetAssign()
        {
            return await _context.Assign.ToListAsync();
        }

        // GET: api/Assigns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Assign>>> GetAssign(Guid id)
        {
            return await _context.Assign
                .Where(a => a.from_employee == id)
                .Distinct()
                .ToListAsync();
        }

        
        // PUT: api/Assigns/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAssign(Guid id, Assign assign)
        {
            if (id != assign.Id)
            {
                return BadRequest();
            }

            _context.Entry(assign).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssignExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Assigns
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Assign>> PostAssign(Assign assign)
        {
            _context.Assign.Add(assign);
            await _context.SaveChangesAsync();

            return assign;
        }

        // DELETE: api/Assigns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Assign>> DeleteAssign(Guid id)
        {
            var assign = await _context.Assign.FindAsync(id);
            if (assign == null)
            {
                return NotFound();
            }

            _context.Assign.Remove(assign);
            await _context.SaveChangesAsync();

            return assign;
        }

        private bool AssignExists(Guid id)
        {
            return _context.Assign.Any(e => e.Id == id);
        }

    }
}
