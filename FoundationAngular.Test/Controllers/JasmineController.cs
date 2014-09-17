using System.Web.Mvc;

namespace $safeprojectname$.Test.Controllers
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
