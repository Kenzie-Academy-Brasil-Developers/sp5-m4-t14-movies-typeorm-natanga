import { text } from "stream/consumers";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("movies")
class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: true })
    name: string;

    @Column({ nullable: true, type: 'text' })
    description?: string | null;

    @Column({ width: 4 })
    duration: number;

    @Column({ width: 4 })
    price: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @DeleteDateColumn()
    deletedAt: string;

}

export {
    Movie
}