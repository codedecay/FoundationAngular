using System.Web.Mvc;

namespace FoundationAngular.Test.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
