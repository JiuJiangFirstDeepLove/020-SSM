package com.service.impl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dao.ConsultDAO;
import com.entity.Consult;
import com.service.ConsultService;

@Service("consultService")
public class ConsultServiceImpl implements ConsultService {
	@Autowired
	private ConsultDAO consultDAO;
	@Override // 继承接口的新增 返回值0(失败),1(成功)
	public int insertConsult(Consult consult) {
		return this.consultDAO.insertConsult(consult);
	}

	@Override // 继承接口的更新 返回值0(失败),1(成功)
	public int updateConsult(Consult consult) {
		return this.consultDAO.updateConsult(consult);
	}

	@Override // 继承接口的删除 返回值0(失败),1(成功)
	public int deleteConsult(String consultid) {
		return this.consultDAO.deleteConsult(consultid);
	}

	@Override // 继承接口的查询全部
	public List<Consult> getAllConsult() {
		return this.consultDAO.getAllConsult();
	}

	@Override // 继承接口的按条件精确查询
	public List<Consult> getConsultByCond(Consult consult) {
		return this.consultDAO.getConsultByCond(consult);
	}

	@Override // 继承接口的按条件模糊查询
	public List<Consult> getConsultByLike(Consult consult) {
		return this.consultDAO.getConsultByLike(consult);
	}

	@Override // 继承接口的按主键查询 返回Entity实例
	public Consult getConsultById(String consultid) {
		return this.consultDAO.getConsultById(consultid);
	}

}

