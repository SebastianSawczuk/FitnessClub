using FitnessClub.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessClub.Controllers
{
    [Controller]
    [Route("weatherforecast")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]

        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Summary = $"dupa",
                TemperatureC = Random.Shared.Next(-20, 55),
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            })
            .ToArray();
        }
    }
}