/* eslint-disable camelcase */
class Launch {
  likes

  reserves = []

  comments = []

  constructor(id, name, lsp_name, mission_type, pad, location, image) {
    this.id = id;
    this.name = name;
    this.lspName = lsp_name;
    this.missionType = mission_type;
    this.pad = pad;
    this.location = location;
    this.image = image;
  }
}

export default Launch;
