class Launch {
  likes;

  reserves = []

  comments = []

  constructor(id, name, lspName, missionType, pad, location, image) {
    this.id = id;
    this.name = name;
    this.lsp_name = lspName;
    this.mission_type = missionType;
    this.pad = pad;
    this.location = location;
    this.image = image;
  }
}

export default Launch;
