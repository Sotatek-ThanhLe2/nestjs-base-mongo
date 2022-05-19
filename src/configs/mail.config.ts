import { getConfig } from 'src/configs/index';

interface IEmailConfig {
  host: string;
  port: string;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
}

export const mailConfig: IEmailConfig = {
  host: getConfig().get<string>('mail.host'),
  port: getConfig().get<string>('mail.port'),
  secure: false,
  auth: {
    user: getConfig().get<string>('mail.account'),
    pass: getConfig().get<string>('mail.password'),
  },
  from: getConfig().get<string>('mail.from'),
};
