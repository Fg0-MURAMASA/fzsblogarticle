// if(user0!==undefined){
//     document.getElementById("addtext").innerHTML=user0;
//     }
//     $(".add").click(function(){
//         var d=new Date();
//         document.getElementById("time").innerHTML=d;
//         var obj= document.getElementById("addtext").innerHTML;
//         localStorage.setItem("userInfo0",JSON.stringify(obj));
//         alert("已经成功保存咯!");
// })

$(document).ready(function(){
    var count = localStorage.num
    var save=count
    console.log("num="+localStorage.num);








    if(count==undefined){
        count =0
    }
    if(count!=0){
        console.log("setting message...")
        count=0
        for(let a=1;a<=save;a++){
            count = Number(count) + 1;   
            let div = document.createElement("div");                         // 先创建一个盒子
            div.className = "addtext";                                       // 设置类名
            div.setAttribute('id','editbox'+count);                          // 设置 ID
            div.setAttribute("contenteditable", "false");                     // 设置 contenteditable 属性
            div.innerHTML='<div class="edittime"></div>';   
            const text=document.createElement("div");
            div.appendChild(text);    
            text.className='textt'
            text.innerHTML=JSON.parse(localStorage.getItem("text"+count))
            const node1 = document.createElement("button");                  // 创建一个按钮
            node1.className = "edittt";                                      // 按钮的类名为 edittt
            div.setAttribute('id','edittt'+ (count));                        // 设置 ID，目前看来没什么用
            node1.addEventListener("click", gogogo);                         // 添加监听器（非常重要）
            node1.innerText = "修改";
            div.appendChild(node1);                                          // 将按钮添加到盒子里
            const like=document.createElement("div")
            like.className="like"
            div.appendChild(like)
            like.addEventListener("click",good);
            like.innerHTML=localStorage.getItem("like"+count);
            // like.innerHTML=0
            let node2 = document.createTextNode("This is a paragraph.");
            div.appendChild(node2);
            const del=document.createElement("div")
            del.className="delete"
            div.appendChild(del)
            del.addEventListener("click",dell);
            document.getElementById('scroll').appendChild(div);
            const countnode=document.createElement("div");
            countnode.innerHTML=count
            node1.appendChild(countnode);
            var i=Number(countnode.innerHTML)
            console.log(i)
            localStorage.num=i;

        }
    }

    function dell(event){

        if(count!=1){
        let targetnode=event.target
        let div=targetnode.parentNode
        let i= div.children[2].children[0].innerHTML;
        console.log(div.children[2])
        let x=1;
        if(i!=count){
        while(x<count){
            if(x>=i){1
                let HTML=JSON.parse(localStorage.getItem("text"+(x+1)))
                localStorage.setItem("text"+x,JSON.stringify(HTML));
                let suki=Number(JSON.parse(localStorage.getItem("like"+(x+1))))
                localStorage.setItem("like"+x,suki);
                localStorage.setItem("like"+(x+1),0);
                if(Number(JSON.parse(localStorage.getItem("like"+(x))))==null){
                    localStorage.setItem("like"+i,0);
                }
            }
            x++}
        }

        div.remove()
        count--
        localStorage.num=Number(localStorage.num)-1;
        console.log(Number(JSON.parse(localStorage.getItem("like1"))))
        console.log(Number(JSON.parse(localStorage.getItem("like2"))))
    }
    }


    $(".add").click(function () {
        // count = Number(count) + 1;    
        // let div = document.createElement("div");                         // 先创建一个盒子
        // div.className = "addtext";                                       // 设置类名
        // div.setAttribute('id','editbox'+count);                          // 设置 ID
        // div.setAttribute("contenteditable", "false");                     // 设置 contenteditable 属性
        // div.innerHTML='<div class="textt"></div><div class="edittime"></div> <div class="delete"><div>';
        // const text=document.createElement("div");
        // div.appendChild(text);
        // const node1 = document.createElement("button");                  // 创建一个按钮
        // node1.className = "edittt";                                      // 按钮的类名为 edittt
        // div.setAttribute('id','edittt'+ (count));                        // 设置 ID，目前看来没什么用
        // node1.addEventListener("click", gogogo);                         // 添加监听器（非常重要）
        // node1.innerText = "修改";
        // div.appendChild(node1);                                          // 将按钮添加到盒子里
        //  const node2 = document.createTextNode("This is a paragraph.");
        // div.appendChild(node2);
        // const like=document.createElement("div")
        // like.className="like"
        //     like.innerHTML=0
        // div.appendChild(like)
        // like.addEventListener("click",good);
        // const del=document.createElement("div")
        // div.appendChild(del)
        // del.addEventListener("click",dell);
        // document.getElementById('scroll').appendChild(div);
        // const countnode=document.createElement("div");
        // countnode.innerHTML=count
        // node1.appendChild(countnode);
        // var i=Number(countnode.innerHTML)
        // console.log("i="+i)
        // localStorage.num=i;          
        
        
        count = Number(count) + 1;   
        let div = document.createElement("div");                         // 先创建一个盒子
        div.className = "addtext";                                       // 设置类名
        div.setAttribute('id','editbox'+count);                          // 设置 ID
        div.setAttribute("contenteditable", "false");                     // 设置 contenteditable 属性
        div.innerHTML='<div class="edittime"></div>';   
        const text=document.createElement("div");
        div.appendChild(text);    
        text.className='textt'
        const node1 = document.createElement("button");                  // 创建一个按钮
        node1.className = "edittt";                                      // 按钮的类名为 edittt
        div.setAttribute('id','edittt'+ (count));                        // 设置 ID，目前看来没什么用
        node1.addEventListener("click", gogogo);                         // 添加监听器（非常重要）
        node1.innerText = "修改";
        div.appendChild(node1);                                          // 将按钮添加到盒子里
        const like=document.createElement("div")
        like.className="like"
        div.appendChild(like)
        like.addEventListener("click",good);
        like.innerHTML=localStorage.getItem("like"+count);
        // like.innerHTML=0
        let node2 = document.createTextNode("This is a paragraph.");
        div.appendChild(node2);
        const del=document.createElement("div")
        del.className="delete"
        div.appendChild(del)
        del.addEventListener("click",dell);
        document.getElementById('scroll').appendChild(div);
        const countnode=document.createElement("div");
        countnode.innerHTML=count
        node1.appendChild(countnode);
        var i=Number(countnode.innerHTML)
        console.log(i)
        localStorage.num=i;
        


    });

    function judge(node){
        return node.getAttribute("contenteditable");
    }

    function gogogo(event){
        let targetNode = event.target;
        let i = targetNode.children[0].innerHTML;
        console.log(targetNode);
        let div = targetNode.parentNode;
        let text=div.children[1].innerHTML
        console.log('i='+i);
        console.log(div);
        console.log(judge(div));
        //调用judge函数直接判断contenteditable属性
        if (judge(div) === "false"){
            div.setAttribute("contenteditable", "true");
        } else {
            localStorage.setItem("text"+i,JSON.stringify(text));
            div.setAttribute("contenteditable", "false");
            console.log(JSON.parse(localStorage.getItem("text1")))
            alert("保存成功!");
        }
    }

   function good(event){
        let targetnode=event.target;
        let like=targetnode.innerHTML;
        let div = targetnode.parentNode
        let i = div.children[2].children[0].innerHTML;
        if(like==0){
            like=1;
            targetnode.innerHTML=like
        }else{
            like++;
            targetnode.innerHTML=like
        }
        console.log("likes"+i+"="+like)
        localStorage.setItem("like"+i,like);
        // localStorage.setItem("like1",0);
    }


    // localStorage.num=0

})




 
    // $("#hotorder").click(function(){
    //     let x = 1;
    //     while (x <= count){
    //         let y = x;
    //         let min;
    //         let minele;
    //         while (y < count){
    //             let ori = JSON.parse(localStorage.getItem("like" + y));
    //             if (y === 1){
    //                 min = ori;
    //                 minele = 1;
    //             }
    //             if (ori < min){
    //                 min = ori;
    //                 minele = y;
    //             }
    //             y++;
    //         }
    //         const list = document.getElementById("scroll");
    //         const nodee = document.getElementById("edittt"+min);
    //         const firstChild = list.firstElementChild; 
    //         list.insertBefore(nodee, firstChild); 
    //         x++;
    //     }
    // });