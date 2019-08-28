'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userId = ctx.query.id;
    const user = await ctx.service.user.findById(userId);
    ctx.body = user;
  }
}

module.exports = HomeController;
