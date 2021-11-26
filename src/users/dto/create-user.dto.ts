export class CreateUserDto {
  username: string;
  phone?: string;
  password?: string;
  email?: string;
  photo?: string;
  googleId?: string;
  facebookId?: string;
}

export default CreateUserDto;
