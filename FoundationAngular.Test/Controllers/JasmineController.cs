using System.Web.Mvc;

namespace FoundationAngular.Test.Controllers
{
    [RoutePrefix("")]
    public class JasmineController : Controller
    {
        [Route]
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
