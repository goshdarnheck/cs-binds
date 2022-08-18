function parseConfig(config) {
  const binds = {};
  const lines = config.trim().split(/\r?\n|\r|\n/g);

  lines.forEach(line => {
    const parts = line.trim().match(/[^\s"']+|"[^"]*"|'[^']*'/g);

    if (parts && parts[0] === 'bind' && parts.length > 2) {
      const code = parts[1].replace(/['"]+/g, '');
      const command = parts[2].replace(/['"]+/g, '');

      binds[code.toLowerCase()] = command;
    }
  })

  return binds;
}

export default parseConfig