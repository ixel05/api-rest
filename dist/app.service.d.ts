export declare class AppService {
    getHello(): string;
    getProducts(): {
        id: number;
        name: string;
    }[];
    getUsers(): {
        id: number;
        name: string;
    }[];
    getPais(): {
        id: number;
        paises: string;
    }[];
    getGenero(): {
        id: number;
        paises: string;
    }[];
    getMarca(): {
        id: number;
        paises: string;
    }[];
    createProduct(): {
        id: number;
        name: string;
    };
    createCategory(): {
        id: number;
        name: string;
    };
}
