import bcryptjs from 'bcryptjs';

export default async function encrypt(password: string): Promise<string> {
  const salt = await bcryptjs.genSaltSync(10);

  const hash = await bcryptjs.hashSync(password, salt);
  console.log(await hash);
  return hash;
}
export async function compareHash(
  password: string,
  passwordHash: string,
): Promise<boolean> {
  return bcryptjs.compare(password, passwordHash);
}
