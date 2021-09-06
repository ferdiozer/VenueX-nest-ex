import { Typegoose, prop } from 'typegoose';
import { IsString, IsEmail, IsMongoId, IsOptional, IsEnum } from 'class-validator';

export enum GenderType {
    MALE = 'male',
    FEMALE = 'female',
    UNISEX = 'unisex',
}

export enum ConditionType {
    NEW = 'new',
    USED = 'used',
}

export default class Product extends Typegoose {

    @IsMongoId()
    @IsOptional()
    _id: string;

    @IsString()
    @prop({ required: true })
    title: string;

    @IsString()
    description: string;

    @IsString()
    link: string;

    @IsString()
    @prop()
    price: string;

    @IsString()
    @prop()
    currency: string;

    @IsString()
    @prop()
    quantity: number;

    @IsString()
    @prop()
    brand: string;

    @IsString()
    @prop({ default: "black" })
    color: string;

    @IsEnum(GenderType)
    @prop({
        required: true,
        enum: Object.values(GenderType),
    })
    gender: string;

    @prop({
        required: true,
        unique: true,
        index: true,
    })
    gtin: string;

    @IsString()
    @prop({
        required: true,
    })
    mpn: string;

    @IsEnum(ConditionType)
    @prop({
        required: true,
        enum: Object.values(ConditionType),
    })
    condition: string;

}


/*
interface Product {
 title: string;
 description: string;
 link: string; // web page
 price: string; // decimal(10, 2)
 currency: string; // ISO 4217 currency code
 quantity: number;
 brand: string; // Brand name
 color: string; // ex: black, white, pink, etc...
 gender: string; // enum: male, female, unisex
 gtin?: string; // global item trade number
 mpn?: string; // manufacturer part number
 condition: string; // enum: "new", "used"
}
*/