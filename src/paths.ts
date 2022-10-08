import "module-alias/register";
import { addAliases } from "module-alias";

addAliases({
  "@controllers": `${__dirname}/controllers`,
  "@middlewares": `${__dirname}/middlewares`,
  "@routes": `${__dirname}/routes`,
  "@utils": `${__dirname}/utils`,
});
