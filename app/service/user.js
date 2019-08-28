'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findById(uid) {
    const user = await this.app.mysql.get('t_user', { id: uid });
    return { user };
  }

}

module.exports = UserService;
