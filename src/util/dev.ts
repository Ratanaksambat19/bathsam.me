export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () => (isDebug() ? 'http://localhost:3000' : '');
