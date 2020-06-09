using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExerciseWebApi.Models;

namespace ExerciseWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentitasController : ControllerBase
    {
        private readonly IdentitasContext _context;

        public IdentitasController(IdentitasContext context)
        {
            _context = context;
        }

        // GET: api/Identitas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Identitas>>> GetIdentitas()
        {
            return await _context.Identitas.ToListAsync();
        }

        // GET: api/Identitas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Identitas>> GetIdentitas(long id)
        {
            var identitas = await _context.Identitas.FindAsync(id);

            if (identitas == null)
            {
                return NotFound();
            }

            return identitas;
        }

        // PUT: api/Identitas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIdentitas(long id, Identitas identitas)
        {
            if (id != identitas.Id)
            {
                return BadRequest();
            }

            _context.Entry(identitas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IdentitasExists(id))
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

        // POST: api/Identitas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Identitas>> PostIdentitas(Identitas identitas)
        {
            _context.Identitas.Add(identitas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIdentitas", new { id = identitas.Id }, identitas);
        }

        // DELETE: api/Identitas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Identitas>> DeleteIdentitas(long id)
        {
            var identitas = await _context.Identitas.FindAsync(id);
            if (identitas == null)
            {
                return NotFound();
            }

            _context.Identitas.Remove(identitas);
            await _context.SaveChangesAsync();

            return identitas;
        }

        private bool IdentitasExists(long id)
        {
            return _context.Identitas.Any(e => e.Id == id);
        }
    }
}
