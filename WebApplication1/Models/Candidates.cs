using System;
using System.Collections.Generic;

namespace CandidateSearch.Models
{
    public partial class Candidates
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public int Salary { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
    }
}
