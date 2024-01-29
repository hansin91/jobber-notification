import exec from 'exec-sh';

const sourcePath = 'src/emails';
const destinationPath = 'build/src';

// Build the command to copy the folder
const command = `cp -R ${sourcePath} ${destinationPath}`;

// Use exec() to run the command
exec(command, { stdio: 'inherit' }, (err) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log('Folder copied successfully!');
});