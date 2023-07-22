const person1= [
  
    {Reg_no:2150039,Name:"Abishek",Mark_1:99,Mark_2:98,Mark_3:99,Total:296,}
  
];
    console.table(person1);
    let tabledata="";
    let bodytbl = person1.map((values)=>{
        tabledata += `
        <tr>
            <td>
                ${values.Reg_no}
            </td>
            <td>
                ${values.Name}
            </td>
            <td>
                ${values.Mark_1}
            </td>
            <td>
                ${values.Mark_2}
            </td>
            <td>
                ${values.Mark_3}
            </td>
            <td>
                ${values.Total}
            </td>
         
            <td>
            <button onclick = "remo1()"> 
        remove
    </button>
    </td>
        </tr>
        `;
    })
    document.getElementById("table1").innerHTML=tabledata;
    const person2 = [
  
      
        {Reg_no1:2150040,Name1:"Yogesh",Mark_11:99,Mark_21:96,Mark_31:99,Total1:294}
      
    ];
        console.table(person2);
        let tabledata2="";
        let bodytb2 = person2.map((values)=>{
            tabledata2 += `
            <tr>
                <td>
                    ${values.Reg_no1}
                </td>
                <td>
                    ${values.Name1}
                </td>
                <td>
                    ${values.Mark_11}
                </td>
                <td>
                    ${values.Mark_21}
                </td>
                <td>
                    ${values.Mark_31}
                </td>
                <td>
                    ${values.Total1}
                </td>
                <td>
                <button onclick = "remo2()"> 
            remove
        </button>
        </td>
            </tr>
            `;
        })
        document.getElementById("table2").innerHTML=tabledata2;
    
        const person3 = [
  
      
            {Reg_no1:2150041,Name1:"Dharanish",Mark_11:99,Mark_21:96,Mark_31:99,Total1:294}
          
        ];
            console.table(person3);
            let tabledata3="";
            let bodytb3 = person3.map((values)=>{
                tabledata3 += `
                <tr>
                    <td>
                        ${values.Reg_no1}
                    </td>
                    <td>
                        ${values.Name1}
                    </td>
                    <td>
                        ${values.Mark_11}
                    </td>
                    <td>
                        ${values.Mark_21}
                    </td>
                    <td>
                        ${values.Mark_31}
                    </td>
                    <td>
                        ${values.Total1}
                    </td>
                    <td>
                    <button onclick = "remo3()"> 
                remove
            </button>
            </td>
                </tr>
                `;
            })
            document.getElementById("table3").innerHTML=tabledata3;
        
    function remo1() {
        document.getElementById("table1").remove();
    }
    function remo3() {
        document.getElementById("table3").remove();
    }
    function remo2() {
        document.getElementById("table2").remove();
    }
    // JavaScript code
    (function(document) {
        'use strict';
        
        var TableFilter = (function(Arr) {
        
        var _input;
        
        function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
        Arr.forEach.call(table.tBodies, function(tbody) {
        Arr.forEach.call(tbody.rows, _filter);
        });
        });
        }
        
        function _filter(row) {
        var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }
        
        return {
        init: function() {
        var inputs = document.getElementsByClassName('light-table-filter');
        Arr.forEach.call(inputs, function(input) {
        input.oninput = _onInputEvent;
        });
        }
        };
        })(Array.prototype);
        
        document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
        TableFilter.init();
        }
        });
        
       })(document);