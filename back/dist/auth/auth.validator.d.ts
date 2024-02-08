import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { Repository } from 'typeorm';
import { AuthEntity } from './auth.entity';
export declare class AuthExistsConstraint implements ValidatorConstraintInterface {
    private readonly authRepository;
    constructor(authRepository: Repository<AuthEntity>);
    validate(authId: number): Promise<boolean>;
}
export declare function AuthExists(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
