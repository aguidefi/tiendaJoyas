export const serverMiddleware = (req,res,next) => {
  console.log({
    method: req.method,
    body: req.body,
    path: req.path,
    params: req.params,
    query: req.query,
    url: req.url,
  })
  next();
}