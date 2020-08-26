const data = [
  {
    "id": 1,
    "parentId": 0,
    "isActive": true,
    "balance": "$3,655.34",
    "name": "Yolanda Chavez",
    "email": "yolandachavez@isoplex.com"
  },
  {
    "id": 2,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,247.87",
    "name": "Navarro Levy",
    "email": "navarrolevy@isoplex.com"
  },
  {
    "id": 3,
    "parentId": 2,
    "isActive": true,
    "balance": "$2,559.85",
    "name": "Wooten Hartman",
    "email": "wootenhartman@isoplex.com"
  },
  {
    "id": 4,
    "parentId": 3,
    "isActive": false,
    "balance": "$3,474.20",
    "name": "Mack Hess",
    "email": "mackhess@isoplex.com"
  },
  {
    "id": 5,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,231.49",
    "name": "Jocelyn Burch",
    "email": "jocelynburch@isoplex.com"
  },
  {
    "id": 6,
    "parentId": 5,
    "isActive": false,
    "balance": "$3,955.44",
    "name": "Prince Daniel",
    "email": "princedaniel@isoplex.com"
  },
  {
    "id": 7,
    "parentId": 5,
    "isActive": false,
    "balance": "$1,994.83",
    "name": "Newton Medina",
    "email": "newtonmedina@isoplex.com"
  },
  {
    "id": 8,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,311.17",
    "name": "Arnold Steele",
    "email": "arnoldsteele@isoplex.com"
  },
  {
    "id": 9,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,313.46",
    "name": "Kitty Glover",
    "email": "kittyglover@isoplex.com"
  },
  {
    "id": 10,
    "parentId": 9,
    "isActive": false,
    "balance": "$3,314.14",
    "name": "Pruitt Spencer",
    "email": "pruittspencer@isoplex.com"
  },
  {
    "id": 11,
    "parentId": 0,
    "isActive": false,
    "balance": "$1,778.44",
    "name": "Stefanie Quinn",
    "email": "stefaniequinn@isoplex.com"
  },
  {
    "id": 12,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,141.37",
    "name": "Fox Mcpherson",
    "email": "foxmcpherson@isoplex.com"
  },
  {
    "id": 13,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,662.03",
    "name": "Rodriquez Young",
    "email": "rodriquezyoung@isoplex.com"
  },
  {
    "id": 14,
    "parentId": 0,
    "isActive": false,
    "balance": "$2,573.84",
    "name": "Love Byers",
    "email": "lovebyers@isoplex.com"
  },
  {
    "id": 15,
    "parentId": 14,
    "isActive": false,
    "balance": "$1,254.07",
    "name": "Banks Short",
    "email": "banksshort@isoplex.com"
  },
  {
    "id": 16,
    "parentId": 14,
    "isActive": true,
    "balance": "$3,820.34",
    "name": "Guthrie Brown",
    "email": "guthriebrown@isoplex.com"
  },
  {
    "id": 17,
    "parentId": 16,
    "isActive": true,
    "balance": "$2,884.74",
    "name": "Kirsten Mcmahon",
    "email": "kirstenmcmahon@isoplex.com"
  },
  {
    "id": 18,
    "parentId": 1,
    "isActive": false,
    "balance": "$1,694.76",
    "name": "Mcbride Sykes",
    "email": "mcbridesykes@isoplex.com"
  },
  {
    "id": 19,
    "parentId": 1,
    "isActive": true,
    "balance": "$3,644.56",
    "name": "Juanita Camacho",
    "email": "juanitacamacho@isoplex.com"
  },
  {
    "id": 20,
    "parentId": 17,
    "isActive": false,
    "balance": "$1,179.25",
    "name": "Carlene Little",
    "email": "carlenelittle@isoplex.com"
  },
  {
    "id": 21,
    "parentId": 0,
    "isActive": true,
    "balance": "$3,506.90",
    "name": "Caitlin Bernard",
    "email": "caitlinbernard@isoplex.com"
  },
  {
    "id": 22,
    "parentId": 21,
    "isActive": false,
    "balance": "$2,924.31",
    "name": "Vargas Lowe",
    "email": "vargaslowe@isoplex.com"
  },
  {
    "id": 23,
    "parentId": 22,
    "isActive": false,
    "balance": "$1,211.95",
    "name": "Mae Santiago",
    "email": "maesantiago@isoplex.com"
  },
  {
    "id": 24,
    "parentId": 22,
    "isActive": true,
    "balance": "$2,959.37",
    "name": "Gallagher Burnett",
    "email": "gallagherburnett@isoplex.com"
  },
  {
    "id": 25,
    "parentId": 0,
    "isActive": false,
    "balance": "$1,880.20",
    "name": "Reyna Mayo",
    "email": "reynamayo@isoplex.com"
  },
  {
    "id": 26,
    "parentId": 0,
    "isActive": false,
    "balance": "$1,639.69",
    "name": "Hardy Townsend",
    "email": "hardytownsend@isoplex.com"
  },
  {
    "id": 27,
    "parentId": 0,
    "isActive": false,
    "balance": "$3,211.26",
    "name": "Cohen Best",
    "email": "cohenbest@isoplex.com"
  },
  {
    "id": 28,
    "parentId": 27,
    "isActive": true,
    "balance": "$2,270.94",
    "name": "Sherrie Berger",
    "email": "sherrieberger@isoplex.com"
  },
  {
    "id": 29,
    "parentId": 27,
    "isActive": false,
    "balance": "$2,049.45",
    "name": "Gentry Robbins",
    "email": "gentryrobbins@isoplex.com"
  },
  {
    "id": 30,
    "parentId": 0,
    "isActive": true,
    "balance": "$1,177.86",
    "name": "Etta Sampson",
    "email": "ettasampson@isoplex.com"
  }
]

class Table {
  constructor(captions) {
    this.captions = captions;
    this._parentRow = undefined
    this.tableElement = undefined
    this._renderElement = undefined
    this._data = []
    this.rows = []
    this.filterParam = undefined
    this.sortParam = undefined
    this.headerCellOnCLick = this.headerCellOnCLick.bind(this);
  }

  /*
   Добавляет данные даже если не в порядке создания Id
  */
  setData(data) {
    let resultRows = []
    let rescanRows
    data.forEach(dataRow => resultRows.push(table.addRow(dataRow)))
    rescanRows = data.filter(el => !resultRows.includes(el))
    if (rescanRows.length !== data.length && rescanRows.length > 0) {
      this.setData(rescanRows)
    }
    this._data = [...data];
  }

  /*
    Обновление таблицы
  */
  update() {
    this.tableElement.innerHTML = ''
    this.render(this._renderElement)
  }

  /*
    Фильтрация по isActive(all/true/false)
    Сортировка по имени
  */
  headerCellOnCLick(text) {
    if (text === 'isActive') {
      if (this.filterParam) {
        if (this.filterParam.value) {
          this.filterParam = {key: 'isActive', value: false}
        } else {
          this.filterParam = undefined;
        }
      } else {
        this.filterParam = {key: 'isActive', value: true}
      }
    }
    if (text === 'name') {
      if (this.sortParam) {
        this._parentRow = undefined;
        this.sortParam = undefined;
        this.setData(this._data);
      } else {
        this.sortParam = {key: 'name'}
      }
    }
    this.update();
  }

  /*
   Рендер хедера таблицы
  */
  renderHead(table, captions, headerCellOnCLick) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    return ['', ...captions].map(el => {
      let th = document.createElement("th");
      let text = document.createTextNode(el);
      th.addEventListener("click", () => {
        headerCellOnCLick(el)
      })
      th.appendChild(text);
      row.appendChild(th);
    })
  }

  /*
    Перезаполняет данными строки таблицы после фильтрации и сортировки
  */
  reFillRows() {
    this._parentRow = this._parentRow.sortCustom(this.sortParam);
    this.rows = this._parentRow.filterCustom(this.filterParam);
  }

  /*
     Инициализация root строки
   */
  initRows() {
    return new Row({id: 0})
  }

  /*
   Добавление строк
  */
  addRow(rowData) {
    let result
    if (this._parentRow) {
      result = this._parentRow.addSubRow(rowData, this)
    } else {
      this._parentRow = this.initRows()
      result = this._parentRow.addSubRow(rowData, this)
    }
    return result
  }

  /*
    Рендер таблицы
  */
  render(parentElement) {
    this.reFillRows();
    this._renderElement = parentElement
    const parent = parentElement || document.body;
    this.tableElement = this.tableElement || document.createElement('table');
    this.renderHead(this.tableElement, this.captions, this.headerCellOnCLick);
    this.rows.forEach(row => row && row.render(this.tableElement))
    parent.appendChild(this.tableElement);
  }
}

class Row {
  constructor(rowData, table) {
    this.id = rowData.id
    this.cells = rowData
    this.subRows = []
    this.collapsed = true
    this._table = table
  }

  /*
    Фильтрация строк по параметрам
  */
  filterCustom(filterParam) {
    if (filterParam) {
      return this.subRows.map(row => {
        return row.cells[filterParam.key] === filterParam.value ? row : undefined;
      })
    }
    return this.subRows
  }

  /*
    Сортировка строк по параметрам
  */
  sortCustom(sortParam) {
    if (sortParam) {
      this.subRows.sort((a, b) => a.cells[sortParam.key] >= b.cells[sortParam.key] ? 1 : -1)
    }
    return this
  }

  /*
    Добавление подстрок (для строк по parentID)
  */
  addSubRow(subRowData, table) {
    let result = null;
    if (this.id === subRowData.parentId) {
      this.subRows.push(new Row(subRowData, table))
      return subRowData
    } else {
      this.subRows.forEach(innerRow => result = innerRow.addSubRow(subRowData, table) || result)
    }
    return result
  }

  /*
    Рендер строки
  */
  render(tableElement, innerClassName = '') {
    const cellButton = this.filterCustom(this._table.filterParam).filter(el => el).length > 0 ? {_collapsed: this.collapsed ? '+' : '-'} : {'_blank': ' '}
    const rowCells = {...cellButton, ...this.cells}
    let row = tableElement.insertRow();
    for (let key in rowCells) {
      let cell = row.insertCell();
      row.className = innerClassName;
      if (key === '_collapsed') {
        cell.className = 'collapse-cell';
        cell.addEventListener('click', () => {
          this.collapsed = !this.collapsed;
          this._table.update()
        })
      }
      let text = document.createTextNode(rowCells[key]);
      cell.appendChild(text);
    }
    !this.collapsed && this.sortCustom(this._table.sortParam).filterCustom(this._table.filterParam)
      .forEach(subRow => subRow && subRow.render(tableElement, 'collapsed-row'))
  }
}

//TODO pass captions as array of objects like {caption: string, filtered: all/true/false, sort: bool}
const table = new Table(Object.keys(data[0]))
table.setData(data)
table.render()