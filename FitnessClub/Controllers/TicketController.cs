using FitnessClub.Models;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FitnessClub.Controllers
{
    [Controller]
    [Route("ticket")]
    public class TicketController : ControllerBase
    {
        private readonly ILogger<TicketController> _logger;

        public TicketController(ILogger<TicketController> logger)
        {
            _logger = logger;
        }
        MySqlConnection con = new MySqlConnection("server=127.0.0.1;user=root;database=FitnessClub");
        
        //GET: api/<TicketController>
        [HttpGet]
        public IEnumerable<Ticket> Get()
        {
            con.Open();
            MySqlCommand cmd = new MySqlCommand("select * from Tickets;", con);
            MySqlDataReader reader= cmd.ExecuteReader();

            List<Ticket> tickets = new List<Ticket>();

            while (reader.Read())
            {
                Ticket ticket = new Ticket();
                ticket.Id = reader.GetInt32(0);
                ticket.Name = reader.GetString(1);
                tickets.Add(ticket);
            }

            return tickets.ToArray();     
        }

        // GET api/<TicketController>/5
        [HttpGet("{id}")]
        public IEnumerable<Ticket> Get(int id)
        {
            return "value";
        }

        // POST api/<TicketController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TicketController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TicketController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
