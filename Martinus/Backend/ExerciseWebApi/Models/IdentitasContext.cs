using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace ExerciseWebApi.Models
{
    public class IdentitasContext:DbContext
    {
        public IdentitasContext(DbContextOptions<IdentitasContext> options):base(options)
        {

        }
        public DbSet<Identitas> Identitas { get; set; }
    }
}
