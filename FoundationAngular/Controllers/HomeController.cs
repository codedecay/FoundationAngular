using System.Web.Mvc;



namespace $safeprojectname$.Controllers
{
    [RoutePrefix("Home")]
    public class HomeController : Controller
    {
        [Route("~/")]
        [Route]
        [Route("Index")]
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }


        [Route("{page}")]
        [HttpGet]
        public ActionResult Template(string page)
        {
            return View("../Templates/" + page);
        }
    }
}
