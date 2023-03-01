
import { Column,  Entity, PrimaryGeneratedColumn  } from "typeorm";

@Entity("npm run")
class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: true })
    name: string;

    @Column({ nullable: true, type: 'text' })
    description?: string | null|undefined;

    @Column({ width: 4 })
    duration: number;

    @Column({ width: 4 })
    price: number;

}

export {
    Movie
}