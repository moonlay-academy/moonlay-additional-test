using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExerciseWebApi.Models
{
    public class Identitas
    {
        public long Id { get; set; }
        public string nama { get; set; }
        public string tempattinggal { get; set; }
        public string nomor { get; set; }
        public string pekerjaan { get; set; }
    }
}
