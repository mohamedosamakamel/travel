import { Request } from 'express';
import { User } from '../../users/entities/_user.entity';

interface RequestWithUser extends Request {
  me: User;
}

export default RequestWithUser;
