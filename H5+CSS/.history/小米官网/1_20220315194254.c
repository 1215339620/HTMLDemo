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
    l.listsize=50;
    i=1;e=1;
    if (i<1||i>l.length+1)
    {
        return 0;
    }
    q=&(l.elem[i-1]);
    for ( p = &(l.elem[l.length-1]); p >=q; p--)
    {
        *(p+1)=*p;
    }
    *q=e;
    ++l.length;
    printf("insert:")
    for(m=1;m<l.length;m++){
        printf("%d")
    }



    
    
}