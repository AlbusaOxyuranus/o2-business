import { UserInfoViewModel } from './user-info-view-model';

export interface AuthInfoViewModel {
        loggedIn: boolean;
        loaded: boolean;
        user: UserInfoViewModel | null;
}
