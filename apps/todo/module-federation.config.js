module.exports = {
  name: 'apps/todo',
  exposes: {
    './Module': 'apps/todo/src/app/remote-entry/entry.module.ts',
  },
};
