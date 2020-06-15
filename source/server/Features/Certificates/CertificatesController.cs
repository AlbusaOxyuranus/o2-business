using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using O2.Business.BackendForFront.Models;

namespace O2.Business.BackendForFront.Features.Certificates
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificatesController : ControllerBase
    {
        private const string BaseAddress = "/certificates";
        private readonly HttpClient _httpClient;

        public CertificatesController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<IReadOnlyCollection<CertificateModel>>> GetAllAsync(CancellationToken ct)
        {
            // TODO: handle possible _httpClient errors
            var response = await _httpClient.GetAsync(BaseAddress, ct);
            var result = await response.Content.ReadAsAsync<IReadOnlyCollection<CertificateModel>>(ct);
            return Ok(result);
        }
                
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<CertificateModel>> GetByIdAsync(long id, CancellationToken ct)
        {
            // TODO: handle possible _httpClient errors
            var response = await _httpClient.GetAsync($"{BaseAddress}/{id}", ct);
            if(response.StatusCode == HttpStatusCode.NotFound)
            {
                return NotFound();
            }
            var result = await response.Content.ReadAsAsync<CertificateModel>(ct);
            return Ok(result);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<CertificateModel>> UpdateAsync(long id, CertificateModel model, CancellationToken ct)
        {
            // TODO: handle possible _httpClient errors
            var response = await _httpClient.PutAsJsonAsync($"{BaseAddress}/{id}", model, ct);
            if (response.StatusCode == HttpStatusCode.NotFound)
            {
                return NotFound();
            }
            var result = await response.Content.ReadAsAsync<CertificateModel>(ct);
            return Ok(result);
        }

        [HttpPut]
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<CertificateModel>> AddAsync(CertificateModel model, CancellationToken ct)
        {
            // TODO: handle possible _httpClient errors
            var response = await _httpClient.PostAsJsonAsync(BaseAddress, model, ct);
            var result = await response.Content.ReadAsAsync<CertificateModel>(ct);
            return CreatedAtAction(nameof(GetByIdAsync), new { id = result.Id }, result);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> RemoveAsync(long id, CancellationToken ct)
        {
            // TODO: handle possible _httpClient errors
            await _httpClient.DeleteAsync($"{BaseAddress}/{id}", ct);
            return NoContent();
        }
    }
}