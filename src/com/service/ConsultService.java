package com.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.entity.Consult;
@Service("consultService")
public interface ConsultService {
	// 插入数据 调用consultDAO里的insertConsult配置
	public int insertConsult(Consult consult);

	// 更新数据 调用consultDAO里的updateConsult配置
	public int updateConsult(Consult consult);

	// 删除数据 调用consultDAO里的deleteConsult配置
	public int deleteConsult(String consultid);

	// 查询全部数据 调用consultDAO里的getAllConsult配置
	public List<Consult> getAllConsult();

	// 按照Consult类里面的字段名称精确查询 调用consultDAO里的getConsultByCond配置
	public List<Consult> getConsultByCond(Consult consult);

	// 按照Consult类里面的字段名称模糊查询 调用consultDAO里的getConsultByLike配置
	public List<Consult> getConsultByLike(Consult consult);

	// 按主键查询表返回单一的Consult实例 调用consultDAO里的getConsultById配置
	public Consult getConsultById(String consultid);

}

