import {create} from 'zustand';

const useNotes = create((set)=>({
    notes:[],
    setNotes: (notes) =>set({notes}),
}));

export default useNotes;