using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CandidateSearch.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.DTOs;

namespace CandidateSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private CandidateSearchContext _context;
        public CandidatesController(CandidateSearchContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetCandidates([FromQuery] string location, [FromQuery] int? age, [FromQuery] int? salary )
        {
            var query = _context.Candidates.AsQueryable();
            if (!string.IsNullOrEmpty(location))
            {
                query = query.Where(x => x.Location == location);
            }
            if (age>0)
            {
                query = query.Where(x => x.Age == age);
            }
            if (salary>0)
            {
                query = query.Where(x => x.Salary == salary);
            }
            var newQuery = query.ToList();
            List<CandidateDTO> candidates = new List<CandidateDTO>();
            foreach(var candidate in newQuery)
            {
                var candid = new CandidateDTO();
                candid.Name = $"{candidate.FirstName} {candidate.LastName}";
                candid.Age = candidate.Age;
                candid.Description = candidate.Description;
                candid.Id = candidate.Id;
                candid.Salary = candidate.Salary;
                candid.Location = candidate.Location;
                candidates.Add(candid);
            }
                return Ok(candidates);
        }
    }
}
