typedef struct 
{
    int *elem;
    int length;
    int listsize;
}List;
List l;
main(){
    int i,e,m,*q,*p;
    l.elem=(int*)malloc(50*sizeof(int));
    if (!l.elem)
    {
        exit(0);
    }
    l.length=0;
    
    
}